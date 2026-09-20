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
		"content": `<style>.sw-h06ypn {
  fill: currentColor;
  d: path("M4 21V3h10v9h3v7.5h2v-8.2q-.225.125-.475.163T18 11.5q-1.05 0-1.775-.725T15.5 9q0-.8.438-1.437T17.1 6.65L15 4.55l1.05-1.05l3.7 3.6q.375.375.563.875T20.5 9v12h-5v-7.5H14V21zm2-11h6V5H6zm12 0q.425 0 .713-.288T19 9t-.288-.712T18 8t-.712.288T17 9t.288.713T18 10");
}
</style><path class="sw-h06ypn"/>`,
		"fallback": "material-symbols:local-gas-station-sharp",
	});
}

export default Component;
