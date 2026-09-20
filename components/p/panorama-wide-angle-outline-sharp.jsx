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
		"content": `<style>.ch3pgy7xe {
  fill: currentColor;
  d: path("M7.463 19.788Q5.2 19.575 3 19q-.525-1.725-.763-3.463T2 12t.238-3.537T3 5q1.975-.5 4.2-.75T12 4t4.8.25T21 5q.525 1.725.763 3.463T22 12t-.25 3.538T21 19q-2.2.575-4.462.788T12 20t-4.538-.213m8.263-1.95q1.85-.162 3.675-.587q.325-1.3.463-2.6T20 12t-.137-2.65t-.463-2.6q-1.625-.375-3.437-.562T12 6q-2.125 0-3.937.188T4.6 6.75q-.325 1.3-.462 2.6T4 12t.138 2.65t.462 2.6q1.825.425 3.675.588T12 18t3.725-.162");
}
</style><path class="ch3pgy7xe"/>`,
		"fallback": "material-symbols:panorama-wide-angle-outline-sharp",
	});
}

export default Component;
