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
		"content": `<style>.scg6uml8p {
  fill: currentColor;
  d: path("M14.07 11.746a2 2 0 0 0 2.91.001l.324-.344c.298.14.577.316.835.519l-.126.422a2 2 0 0 0 1.456 2.52l.348.081a4.7 4.7 0 0 1 .011 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556q-.382.294-.823.498l-.336-.358a2 2 0 0 0-2.91-.001l-.325.344a4.3 4.3 0 0 1-.835-.518l.126-.423a2 2 0 0 0-1.456-2.52l-.349-.081a4.7 4.7 0 0 1-.01-1.017l.46-.118a2 2 0 0 0 1.431-2.478l-.156-.556q.383-.295.822-.498zM5.05 4.052a6.998 6.998 0 0 1 11.848 6.127a5.5 5.5 0 0 0-6.339 7.74a1.99 1.99 0 0 1-1.812-.363l-.133-.117l-2.043-1.985l-1.521-1.499a7.006 7.006 0 0 1 0-9.903M15.5 14.5a1 1 0 1 0 .001 2a1 1 0 0 0-.001-2m-5.5-8a2.5 2.5 0 1 0 .001 5.001A2.5 2.5 0 0 0 10 6.5");
}
</style><path class="scg6uml8p"/>`,
		"fallback": "fluent:location-settings-20-filled",
	});
}

export default Component;
