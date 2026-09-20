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
		"content": `<style>.iana4oxhz {
  fill: currentColor;
  d: path("M4.354 5.646L3.707 5H17.5a.5.5 0 0 0 0-1H3.707l.647-.646a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 1 0 .708-.708M2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 4.5h13.793l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H2.5a.5.5 0 0 1 0-1");
}
</style><path class="iana4oxhz"/>`,
		"fallback": "fluent:text-align-distributed-20-regular",
	});
}

export default Component;
