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
		"content": `<style>.zd6-nhlzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.561 4.5h20.337a1.263 1.263 0 0 1 1.159 1.795l-4.173 14.14a2.53 2.53 0 0 1-2.218 1.794H7.329a1.263 1.263 0 0 1-1.159-1.795l4.173-14.14A2.53 2.53 0 0 1 12.561 4.5m7.773 21.271h20.337a1.263 1.263 0 0 1 1.159 1.795l-4.173 14.14a2.53 2.53 0 0 1-2.218 1.794H15.102a1.263 1.263 0 0 1-1.159-1.794l4.173-14.14a2.53 2.53 0 0 1 2.218-1.795");
}
</style><path class="zd6-nhlzv"/>`,
		"fallback": "arcticons:parimatchru",
	});
}

export default Component;
