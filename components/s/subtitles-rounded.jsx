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
		"content": `<style>.kn9ofoudf {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm2.461-3.577h6.846q.213 0 .356-.144q.144-.144.144-.357t-.144-.356t-.356-.143H7.077q-.213 0-.356.144t-.144.357t.144.356t.356.143m3-3.577h6.846q.213 0 .356-.144t.144-.357t-.144-.356t-.356-.143h-6.846q-.213 0-.356.144q-.144.144-.144.357t.144.356t.356.143m-2.643-.144q.143-.144.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.357t.144.356t.356.143t.357-.144m9.846 3.577q.143-.144.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.357t.144.356t.357.143t.356-.144");
}
</style><path class="kn9ofoudf"/>`,
		"fallback": "material-symbols-light:subtitles-rounded",
	});
}

export default Component;
