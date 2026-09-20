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
		"content": `<style>.t7v849bqd {
  fill: currentColor;
  d: path("M16 8V5H8v3H6V3h12v5zM4 10h16zm14 2.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M16 19v-4H8v4zm2 2H6v-4H2V8h20v9h-4zm2-6v-5H4v5h2v-2h12v2z");
}
</style><path class="t7v849bqd"/>`,
		"fallback": "material-symbols:print-outline-sharp",
	});
}

export default Component;
