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
		"content": `<style>.ytbgqzbnb {
  fill: currentColor;
  d: path("M2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm6.713-11.288Q9 10.425 9 10t-.288-.712T8 9t-.712.288T7 10t.288.713T8 11t.713-.288m4 0Q13 10.426 13 10t-.288-.712T12 9t-.712.288T11 10t.288.713T12 11t.713-.288m4 0Q17 10.426 17 10t-.288-.712T16 9t-.712.288T15 10t.288.713T16 11t.713-.288");
}
</style><path class="ytbgqzbnb"/>`,
		"fallback": "material-symbols:sms",
	});
}

export default Component;
