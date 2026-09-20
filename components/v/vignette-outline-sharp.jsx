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
		"content": `<style>.z730atbzf {
  fill: currentColor;
  d: path("M16.225 14.813Q18 13.625 18 12t-1.775-2.812T12 8T7.775 9.188T6 12t1.775 2.813T12 16t4.225-1.187M9.187 13.4Q8 12.8 8 12t1.188-1.4T12 10t2.813.6T16 12t-1.187 1.4T12 14t-2.812-.6M2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="z730atbzf"/>`,
		"fallback": "material-symbols:vignette-outline-sharp",
	});
}

export default Component;
