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
		"content": `<style>.r5ivu1cqv {
  fill: currentColor;
  d: path("M6.23 14.692V12.5h.886v1.308h2.076v-4.5h.885v5.384zm6.078 0V13h.884v.808h2.616v-1.5h-3.5v-3h4.384V11h-.884v-.808h-2.616v1.5h3.5v3z");
}
</style><path class="r5ivu1cqv"/>`,
		"fallback": "material-symbols-light:javascript-sharp",
	});
}

export default Component;
