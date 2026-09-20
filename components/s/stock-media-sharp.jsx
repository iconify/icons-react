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
		"content": `<style>.hz16rds_a {
  fill: currentColor;
  d: path("M2 15V2h13v13zm6-3.75L6.8 9.6L5 12h7L9.7 9zm6.875 9.875Q14 20.25 14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22t-2.125-.875");
}
</style><path class="hz16rds_a"/>`,
		"fallback": "material-symbols:stock-media-sharp",
	});
}

export default Component;
