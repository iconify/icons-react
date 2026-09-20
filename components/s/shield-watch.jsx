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
		"content": `<style>.md2gadcfd {
  fill: currentColor;
  d: path("m16.385 21l-.326-2.108q-.726-.496-1.143-1.266q-.416-.77-.416-1.645t.416-1.645t1.143-1.267l.325-2.108h3.231l.326 2.108q.726.496 1.143 1.266q.416.77.416 1.646t-.416 1.645t-1.144 1.266L19.616 21zm3.39-3.244q.725-.725.725-1.775t-.725-1.775T18 13.48t-1.775.725t-.725 1.775t.725 1.775T18 18.48t1.775-.725M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615v2.885h-4.665l-.493 3.252q-.813.829-1.27 1.896t-.457 2.256q0 1.204.457 2.278t1.297 1.902q-.442.275-.91.466q-.467.19-.959.335");
}
</style><path class="md2gadcfd"/>`,
		"fallback": "material-symbols-light:shield-watch",
	});
}

export default Component;
