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
		"content": `<style>.vqmctn1xa {
  fill: currentColor;
  d: path("M12 20q-.65 0-1.175.388t-.725.987q-.05.275-.262.45T9.35 22H7q-.825 0-1.412-.588T5 20V4q0-.825.588-1.413T7 2h2.35q.275 0 .488.175t.262.45q.2.6.725.988T12 4q.65 0 1.175-.388t.725-.987q.05-.275.263-.45T14.65 2H17q.825 0 1.413.587T19 4v16q0 .825-.588 1.413T17 22h-2.35q-.275 0-.488-.175t-.262-.45q-.2-.6-.725-.988T12 20Zm0-2q1.075 0 1.988.537T15.45 20H17V4h-1.55q-.55.925-1.463 1.463T12 6q-1.075 0-1.988-.537T8.55 4H7v16h1.55q.55-.925 1.463-1.463T12 18Zm0-6Z");
}
</style><path class="vqmctn1xa"/>`,
		"fallback": "material-symbols:play-pass-outline-rounded",
	});
}

export default Component;
