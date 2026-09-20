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
		"content": `<style>.liqjvlzqr {
  fill: currentColor;
  d: path("M3.692 4V3h2.712v1zm-.48 16.962H11.5V17.5H3.896zM6.01 9.229l-.714-.688L7.21 6.627l.714.689zM4.104 16.5H11.5v-3.52H4.808zM9.136 5.845Q7.962 4.671 7.962 2.981h8.076q0 1.69-1.174 2.864T12 7.02T9.136 5.845m2.364 5.347V8.481h1v2.711zm1 9.77h8.27l-.685-3.462H12.5zm0-4.462h7.377l-.704-3.52H12.5zm5.529-7.252l-1.927-1.932l.689-.689l1.951 1.908zM17.596 4V3h2.712v1z");
}
</style><path class="liqjvlzqr"/>`,
		"fallback": "material-symbols-light:solar-power",
	});
}

export default Component;
