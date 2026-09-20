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
		"content": `<style>.vlb7xvbhq {
  fill: currentColor;
  d: path("M4.616 5L5.74 7.25q.175.35.5.55t.7.2q.75 0 1.15-.638t.05-1.312L7.616 5h2l1.125 2.25q.175.35.5.55t.7.2q.75 0 1.15-.638t.05-1.312L12.616 5h2l1.125 2.25q.175.35.5.55t.7.2q.75 0 1.15-.638t.05-1.312L17.616 5h1.769q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19H4.615q-.69 0-1.152-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5");
}
</style><path class="vlb7xvbhq"/>`,
		"fallback": "material-symbols-light:movie-rounded",
	});
}

export default Component;
