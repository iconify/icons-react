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
		"content": `<style>.i6el-ub2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.632 17.988l21.824 12V17.963l10.912 6.034l-10.912 5.99V42.01L7.632 29.987v12.024l10.912-5.958l-10.912-6.065v-24l10.912 6.035z");
}
</style><path class="i6el-ub2l"/>`,
		"fallback": "arcticons:vocaloid-collection",
	});
}

export default Component;
