import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z33pg1byo {
  fill: currentColor;
  d: path("M3 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.743q.381-.462.657-1H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5.207q-.524.149-1 .393zm2.5.5A.5.5 0 0 0 5 5v2a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 13 7V5a.5.5 0 0 0-.5-.5zm.5 2v-1h6v1zM16.5 6H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5m0 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5m0 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5m-11 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V15H3.5a.5.5 0 0 1 0-1H5v-1.5a.5.5 0 0 1 .5-.5");
}
</style><path class="z33pg1byo"/>`,
		"fallback": "fluent:notebook-add-20-regular",
	});
}

export default Component;
