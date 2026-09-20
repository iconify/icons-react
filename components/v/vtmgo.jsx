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
		"content": `<style>.j-dlzibql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.389 40.195S9.32 21.635 5.5 11.565l10.797-1.394c5.095 13.04 8.07 19.533 8.07 19.533");
}

.juh6-0b-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.157 8.897c-1.213 16.377-13.769 31.298-13.769 31.298H29.52C41.772 24 42.5 7.805 42.5 7.805z");
}
</style><path class="juh6-0b-v"/><path class="j-dlzibql"/>`,
		"fallback": "arcticons:vtmgo",
	});
}

export default Component;
