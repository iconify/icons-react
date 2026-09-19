import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fl1u8-q9v.css';
import '../../css/y/yhbg_db3j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtXmfHeeC"><g class="rohhhzb0l"><path class="fl1u8-q9v"/><circle class="yhbg_db3j"/></g></mask></defs><path mask="url(#SVGtXmfHeeC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rotate-one",
	});
}

export default Component;
