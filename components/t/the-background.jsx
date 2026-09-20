import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gxphmyebj {
  fill: var(--svg-color--fff, #fff);
  d: path("M4 7.111h4.889v1.334H4zM4 8.89h4.889v1.333H4zm4.889 1.778H4v1.995l1.333-.106v4.333h2.223v-4.333l1.333.106zm.444-3.556h2.223v1.334H9.333zm3.556 0h2.222v1.334H12.89zM11.556 8.89H9.333v1.333h2.223zm-2.223 1.778h2.223v1.778h1.333v-1.778h2.222v6.222H12.89v-2.667h-1.333v2.667H9.333zm5.778-1.778H12.89v1.333h2.222zm.445-1.778H20v1.334h-4.444zm0 1.778H20v1.333h-4.444zm0 1.778H20v1.778h-1.778v.444H20v1.778h-1.778v.444H20v1.778h-4.444z");
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><path class="mumfproca"/><path class="gxphmyebj"/></g>`,
		"fallback": "token-branded:the-background",
	});
}

export default Component;
