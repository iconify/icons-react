import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hlfpifb2v.css';
import '../../css/a/alza-z4hs.css';
import '../../css/v/vt5zoub3u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq4SwxdRL"><g class="wwvp95byt"><path class="hlfpifb2v"/><path class="alza-z4hs"/><path class="vt5zoub3u"/></g></mask></defs><path mask="url(#SVGq4SwxdRL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:thunderbolt",
	});
}

export default Component;
