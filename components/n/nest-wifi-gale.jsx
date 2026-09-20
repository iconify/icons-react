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
		"content": `<style>.kv8hn1n1h {
  fill: currentColor;
  d: path("M2.6 10h18.8l-.275-4.125q-.05-.8-.625-1.338T19.125 4H4.875q-.8 0-1.375.537t-.625 1.338L2.6 10Zm1.55 9h.525L5 20h14l.325-1h.525q.875 0 1.462-.625t.538-1.5L21.525 12H2.475l-.325 4.875q-.05.875.537 1.5T4.15 19Z");
}
</style><path class="kv8hn1n1h"/>`,
		"fallback": "material-symbols:nest-wifi-gale",
	});
}

export default Component;
