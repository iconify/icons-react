import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/s9tz2zumz.css';
import '../../css/i/i1b443bkt.css';
import '../../css/g/gilfwhj-b.css';
import '../../css/y/yjv45b33a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsbUJ6bai"><g class="v3_i3wktz"><rect class="s9tz2zumz"/><path class="i1b443bkt"/><path class="gilfwhj-b"/><path class="yjv45b33a"/></g></mask></defs><path mask="url(#SVGsbUJ6bai)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:record",
	});
}

export default Component;
