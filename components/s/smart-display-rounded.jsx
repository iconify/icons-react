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
		"content": `<style>.msete8b3p {
  fill: currentColor;
  d: path("m10.621 15.173l4.421-2.825q.187-.13.187-.348t-.187-.348l-4.42-2.825q-.212-.137-.417-.025T10 9.156v5.688q0 .243.205.354t.416-.025M4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="msete8b3p"/>`,
		"fallback": "material-symbols-light:smart-display-rounded",
	});
}

export default Component;
