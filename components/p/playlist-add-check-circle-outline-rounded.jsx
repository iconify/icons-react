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
		"content": `<style>.gmawe3b-c {
  fill: currentColor;
  d: path("m14.05 15.55l-.7-.7q-.3-.3-.712-.312t-.713.287t-.3.713t.3.712l1.425 1.425q.3.3.7.3t.7-.3l3.575-3.575q.3-.3.288-.7t-.313-.7q-.3-.275-.7-.287t-.7.287zM8 15h1q.425 0 .713-.288T10 14t-.288-.712T9 13H8q-.425 0-.712.288T7 14t.288.713T8 15m0-3h5q.425 0 .713-.288T14 11t-.288-.712T13 10H8q-.425 0-.712.288T7 11t.288.713T8 12m0-3h5q.425 0 .713-.288T14 8t-.288-.712T13 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8");
}
</style><path class="gmawe3b-c"/>`,
		"fallback": "material-symbols:playlist-add-check-circle-outline-rounded",
	});
}

export default Component;
