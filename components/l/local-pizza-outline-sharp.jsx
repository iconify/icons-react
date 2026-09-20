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
		"content": `<style>.ti1u5_ltt {
  fill: currentColor;
  d: path("M12 22L2 7q2.125-1.8 4.663-2.9T12 3t5.338 1.088T22 7zm0-3.6l7.3-10.95q-1.625-1.125-3.475-1.788T12 5t-3.812.663T4.7 7.45zm-1.437-8.837Q11 9.124 11 8.5t-.437-1.062T9.5 7t-1.062.438T8 8.5t.438 1.063T9.5 10t1.063-.437m2.5 5q.437-.438.437-1.063t-.437-1.062T12 12t-1.062.438T10.5 13.5t.438 1.063T12 15t1.063-.437M12 18.4");
}
</style><path class="ti1u5_ltt"/>`,
		"fallback": "material-symbols:local-pizza-outline-sharp",
	});
}

export default Component;
