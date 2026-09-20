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
		"content": `<style>.zfj734knn {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm3-5h6q.425 0 .713-.288T16 16V8q0-.425-.288-.712T15 7H9q-.425 0-.712.288T8 8v8q0 .425.288.713T9 17m1-2v-4h4v4zm2-9.75q.325 0 .538-.213t.212-.537t-.213-.537T12 3.75t-.537.213t-.213.537t.213.538t.537.212m0 15q.325 0 .538-.213t.212-.537t-.213-.537T12 18.75t-.537.213t-.213.537t.213.538t.537.212");
}
</style><path class="zfj734knn"/>`,
		"fallback": "material-symbols:switch-rounded",
	});
}

export default Component;
