import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o_9uvrmvu.css';
import '../../css/l/lp9xhlbuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9K7TFbOT"><g class="wwvp95byt"><path class="o_9uvrmvu"/><path class="lp9xhlbuq"/></g></mask></defs><path mask="url(#SVG9K7TFbOT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:micro-sd",
	});
}

export default Component;
