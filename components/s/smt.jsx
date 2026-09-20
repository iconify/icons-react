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
		"content": `<style>.ya2ssxb1w {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12.065 4L5.62 8.955L3 16.935l6.465-4.45L12.045 20l2.555-7.515l6.4 4.45l-2.475-7.98zm-.46 1.155l-5.466 4.22l-1.91 5.945l5.07-3.53zm.874 0l5.47 4.22h-.005l1.91 5.945l-5.07-3.53zM12.084 6l-2.1 5.5h4.035zm0 12l-2.1-5.5h4.035z");
}
</style><path clip-rule="evenodd" class="ya2ssxb1w"/>`,
		"fallback": "token-branded:smt",
	});
}

export default Component;
