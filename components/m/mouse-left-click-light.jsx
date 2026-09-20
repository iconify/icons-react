import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gy6g2gbyk {
  fill: currentColor;
  d: path("M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-60V30h10a50.06 50.06 0 0 1 50 50m-72-50v35.51L91.09 34.6A49.7 49.7 0 0 1 112 30ZM80.62 41.11L122 82.49V106h-7.51L66.9 58.42a50.3 50.3 0 0 1 13.72-17.31M62 80a50 50 0 0 1 .78-8.73L97.51 106H62Zm82 146h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50");
}
</style><path class="gy6g2gbyk"/>`,
		"fallback": "ph:mouse-left-click-light",
	});
}

export default Component;
