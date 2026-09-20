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
		"content": `<style>.cf1vpbi5a {
  fill: currentColor;
  d: path("M22 19.15L10.85 8H20q.825 0 1.413.588T22 10zM6.85 4l-2-2H14q.825 0 1.413.588T16 4v2h-2V4zM10 22q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85l-.725-.725q-.3-.3-.288-.712T1.3 2.7t.713-.3t.712.3L21.3 21.3q.3.3.3.7t-.3.7t-.712.3t-.713-.3l-.725-.7z");
}
</style><path class="cf1vpbi5a"/>`,
		"fallback": "material-symbols:stack-off-rounded",
	});
}

export default Component;
