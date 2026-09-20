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
		"content": `<style>.ssiru9bax {
  fill: currentColor;
  d: path("M12 22L2 7q2.125-1.8 4.663-2.9T12 3t5.338 1.088T22 7zM10.563 9.563Q11 9.125 11 8.5t-.437-1.062T9.5 7t-1.062.438T8 8.5t.438 1.063T9.5 10t1.063-.437m2.5 5q.437-.438.437-1.063t-.437-1.062T12 12t-1.062.438T10.5 13.5t.438 1.063T12 15t1.063-.437");
}
</style><path class="ssiru9bax"/>`,
		"fallback": "material-symbols:local-pizza-sharp",
	});
}

export default Component;
