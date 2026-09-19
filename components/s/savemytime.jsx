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
		"content": `<style>.aoz2vjb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.92c-2.85-6.74-10.59-2.22-10.59 2.57c0 4.8 2.54 6.95 9.94 12.44c7.02 5.21 10.91 7.78 10.91 13.41S28.4 43.5 24 43.5s-10.26-1.53-10.26-7.16s3.89-8.2 10.91-13.41c7.4-5.49 9.94-7.65 9.94-12.44S26.85 1.18 24 7.92");
}

.grmmbccwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.97 16.91c-2.3-2.56-4.6-3.19-7.97-3.19c-3.67 0-5.95 1.44-7.55 3.63m-2.71 18.99c0-2.07 2.57-2.35 10.26-2.35s10.26.48 10.26 2.35");
}
</style><path class="aoz2vjb7p"/><path class="grmmbccwe"/>`,
		"fallback": "arcticons:savemytime",
	});
}

export default Component;
