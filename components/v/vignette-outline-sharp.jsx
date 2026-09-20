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
		"content": `<style>.rjfl8kbbo {
  fill: currentColor;
  d: path("M15.879 14.457Q17.5 13.413 17.5 12t-1.621-2.457Q14.258 8.5 12 8.5T8.121 9.543T6.5 12t1.621 2.457T12 15.5t3.879-1.043m-7.038-.701Q7.5 13.012 7.5 12t1.341-1.756T12 9.5t3.159.744T16.5 12t-1.341 1.756T12 14.5t-3.159-.744M3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="rjfl8kbbo"/>`,
		"fallback": "material-symbols-light:vignette-outline-sharp",
	});
}

export default Component;
