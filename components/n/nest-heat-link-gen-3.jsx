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
		"content": `<style>.d5qr6_wlf {
  fill: currentColor;
  d: path("M8 21q-2.075 0-3.537-1.463T3 16V8q0-2.075 1.463-3.537T8 3h8q2.075 0 3.538 1.463T21 8v8q0 2.075-1.463 3.538T16 21zm7.188-5.312Q16.5 14.375 16.5 12.5t-1.312-3.187T12 8T8.813 9.313T7.5 12.5t1.313 3.188T12 17t3.188-1.312M12 15q-1.05 0-1.775-.725T9.5 12.5t.725-1.775T12 10t1.775.725t.725 1.775t-.725 1.775T12 15m0-7.5q.425 0 .713-.288T13 6.5t-.288-.712T12 5.5t-.712.288T11 6.5t.288.713T12 7.5");
}
</style><path class="d5qr6_wlf"/>`,
		"fallback": "material-symbols:nest-heat-link-gen-3",
	});
}

export default Component;
