import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/upg4zdb7x.css';
import '../../css/r/rms-2fbbc.css';
import '../../css/p/p0pjh8bpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVmbgRceM"><g class="aql7dnt-u"><path class="upg4zdb7x"/><path class="rms-2fbbc"/><path class="p0pjh8bpe"/></g></mask></defs><path mask="url(#SVGVmbgRceM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb-micro-two",
	});
}

export default Component;
