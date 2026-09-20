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
		"content": `<style>.el6qx4rao {
  fill: currentColor;
  d: path("M240.49 175.51a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L203 196h-35a12 12 0 0 1-9.76-5L81.82 84H32a12 12 0 0 1 0-24h56a12 12 0 0 1 9.76 5l76.42 107H203l-3.52-3.51a12 12 0 0 1 17-17ZM110.4 152.64a12 12 0 0 0-16.74 2.79L81.82 172H32a12 12 0 0 0 0 24h56a12 12 0 0 0 9.76-5l15.43-21.59a12 12 0 0 0-2.79-16.77m35.2-49.28a12 12 0 0 0 16.74-2.79L174.18 84H203l-3.52 3.51a12 12 0 0 0 17 17l24-24a12 12 0 0 0 0-17l-24-24a12 12 0 0 0-17 17L203 60h-35a12 12 0 0 0-9.76 5l-15.43 21.6a12 12 0 0 0 2.79 16.76");
}
</style><path class="el6qx4rao"/>`,
		"fallback": "ph:shuffle-angular-bold",
	});
}

export default Component;
