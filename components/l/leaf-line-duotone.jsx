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
		"content": `<style>.eql7hzsqg {
  d: path("M12 9.00008L16.4317 4.56842M12 14.5001L18.6143 7.88582M12 19.5001L19.811 11.6891");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tjx5o8dfb {
  d: path("M12 22C16.4183 22 20 18.3541 20 13.8567C20 9.39453 17.4467 4.18759 13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2M12 22C7.58172 22 4 18.3541 4 13.8567C4 9.39453 6.55332 4.18759 10.5371 2.32555C11.0014 2.10852 11.5007 2 12 2M12 22V2");
}
</style><g class="ipq1z-bjh"><path class="eql7hzsqg"/><path class="tjx5o8dfb"/></g>`,
		"fallback": "solar:leaf-line-duotone",
	});
}

export default Component;
