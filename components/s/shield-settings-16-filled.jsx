import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.if6myt-8g {
  fill: currentColor;
  d: path("M9.07 6.746a2 2 0 0 0 2.91.001l.324-.344c.297.14.577.316.835.519l-.126.422a2 2 0 0 0 1.456 2.518l.348.083a4.7 4.7 0 0 1 .011 1.017l-.46.117a2 2 0 0 0-1.431 2.479l.156.556q-.383.294-.822.497l-.337-.357a2 2 0 0 0-2.91-.002l-.325.345a4.3 4.3 0 0 1-.835-.519l.126-.423a2 2 0 0 0-1.456-2.518l-.35-.083a4.7 4.7 0 0 1-.01-1.016l.462-.118a2 2 0 0 0 1.43-2.478l-.156-.557q.383-.294.822-.497zm-1.423-4.6a.5.5 0 0 1 .707 0C9.594 3.39 10.97 4 12.5 4a.5.5 0 0 1 .5.5v1.1a5.5 5.5 0 0 0-7.494 7.204C3.846 11.59 3 9.812 3 7.502V4.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.61 4.147-1.854M10.501 9.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="if6myt-8g"/>`,
		"fallback": "fluent:shield-settings-16-filled",
	});
}

export default Component;
