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
		"content": `<style>.jzi0uvb8g {
  fill: currentColor;
  d: path("M5.116 4h-2V3h3v18h-1zm2.769 17V3h11v18zm1-9.206q.392-.39.902-.592T10.884 11h5q.589 0 1.099.202t.901.592V4h-9zm3.433-3.228q-.433-.433-.433-1.066t.433-1.066Q12.752 6 13.385 6q.632 0 1.066.434q.434.433.434 1.066t-.434 1.066T13.385 9t-1.067-.434m.567 9.934h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="jzi0uvb8g"/>`,
		"fallback": "material-symbols-light:ward-sharp",
	});
}

export default Component;
