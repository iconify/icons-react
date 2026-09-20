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
		"content": `<style>.cose7eblh {
  fill: currentColor;
  d: path("m1.625 19l1.95-14h16.85l1.95 14H18.4l-3-3H8.6l-3 3zm16.088-6.288Q18 12.425 18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13t.713-.288M15 10q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75z");
}
</style><path class="cose7eblh"/>`,
		"fallback": "material-symbols:sports-esports-sharp",
	});
}

export default Component;
