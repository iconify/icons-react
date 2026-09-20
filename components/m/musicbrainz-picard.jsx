import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axfhcvc4t.css';
import '../../css/z/z1mnl9v4i.css';
import '../../css/w/wh3qn5bfd.css';
import '../../css/e/e6p6b3szq.css';
import '../../css/i/iv5c0ud9c.css';
import '../../css/i/iwubpcv8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axfhcvc4t"/><path class="z1mnl9v4i"/><path class="wh3qn5bfd"/><path class="e6p6b3szq"/><path class="iv5c0ud9c"/><path class="iwubpcv8e"/>`,
		"fallback": "selfhst:musicbrainz-picard",
	});
}

export default Component;
