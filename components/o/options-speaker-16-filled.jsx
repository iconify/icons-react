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
		"content": `<style>.cik51oesk {
  fill: currentColor;
  d: path("M12.7 7.1a.5.5 0 0 1 .7.1c.69.92 1.1 2.062 1.1 3.3s-.41 2.38-1.1 3.3a.5.5 0 1 1-.8-.6a4.48 4.48 0 0 0 .9-2.7a4.48 4.48 0 0 0-.9-2.7a.5.5 0 0 1 .1-.7m-3.553.547a.5.5 0 0 1 .854.354v5.002a.5.5 0 0 1-.854.353L7.791 12H6.5a.5.5 0 0 1-.5-.5V11H2.5a.5.5 0 0 1 0-1H6v-.5a.5.5 0 0 1 .5-.5h1.295zm2.077.778a.5.5 0 0 1 .692.14c.369.554.584 1.22.584 1.935s-.215 1.381-.584 1.935a.5.5 0 1 1-.832-.553c.263-.396.416-.87.416-1.382s-.153-.987-.416-1.383a.5.5 0 0 1 .14-.692M6 2.5A2 2 0 0 1 7.935 4H13.5a.5.5 0 0 1 0 1H7.935a1.999 1.999 0 0 1-3.87 0H2.5a.5.5 0 0 1 0-1h1.565A2 2 0 0 1 6 2.5");
}
</style><path class="cik51oesk"/>`,
		"fallback": "fluent:options-speaker-16-filled",
	});
}

export default Component;
