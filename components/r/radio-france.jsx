import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pu1y5sbte {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.944 23.826l9.049.043c-1.19 6.53 2.692 11.158 9.698 9.936l-.043 8.498C15.133 43.892 7.09 35.708 7.944 23.826m13.709-3.752l.173-14.563l7.903-.011l.043 7.73c4.79-1.146 12.358 8.487 9.85 16.812l-9.071.108c1.697-4.054-.054-11.568-8.898-10.076");
}
</style><path class="pu1y5sbte"/>`,
		"fallback": "arcticons:radio-france",
	});
}

export default Component;
