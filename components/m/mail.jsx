import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z5mka_22y.css';
import '../../css/y/yqkq0p36x.css';
import '../../css/i/i4wkegb-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiDQMqbhV"><g class="v3_i3wktz"><path class="z5mka_22y"/><path class="yqkq0p36x"/><path class="i4wkegb-l"/></g></mask></defs><path mask="url(#SVGiDQMqbhV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail",
	});
}

export default Component;
