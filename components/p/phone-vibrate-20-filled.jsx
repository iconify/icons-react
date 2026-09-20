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
		"content": `<style>.umtu66sfq {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3.5 10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2.916 7.223a.5.5 0 0 0-.832.554l.38.57c.284.426.318.972.089 1.43a2.43 2.43 0 0 0 .151 2.43l.38.57a.5.5 0 1 0 .832-.554l-.38-.57a1.43 1.43 0 0 1-.089-1.43a2.43 2.43 0 0 0-.151-2.43zm13.307-.139a.5.5 0 0 1 .693.139l.38.57c.483.724.54 1.652.151 2.43a1.43 1.43 0 0 0 .09 1.43l.38.57a.5.5 0 1 1-.833.554l-.38-.57a2.43 2.43 0 0 1-.151-2.43a1.43 1.43 0 0 0-.09-1.43l-.379-.57a.5.5 0 0 1 .139-.693");
}
</style><path class="umtu66sfq"/>`,
		"fallback": "fluent:phone-vibrate-20-filled",
	});
}

export default Component;
