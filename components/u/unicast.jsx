import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wckasab0r.css';
import '../../css/j/j10ksqbpm.css';
import '../../css/v/vgydm-8ek.css';
import '../../css/e/em5bsmbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcf9pebAu"><g class="csw0kbbpv"><path class="wckasab0r"/><path class="j10ksqbpm"/><path class="vgydm-8ek"/><path class="em5bsmbgk"/></g></mask></defs><path mask="url(#SVGcf9pebAu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:unicast",
	});
}

export default Component;
