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
		"content": `<style>.q5phdxbfd {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4H6zm2-3h8V7H8zm2-2v-4h4v4zm2-8.75q.325 0 .538-.213t.212-.537t-.213-.537T12 4.75t-.537.213t-.213.537t.213.538t.537.212m0 13q.325 0 .538-.213t.212-.537t-.213-.537T12 17.75t-.537.213t-.213.537t.213.538t.537.212M12 12");
}
</style><path class="q5phdxbfd"/>`,
		"fallback": "material-symbols:switch-outline",
	});
}

export default Component;
