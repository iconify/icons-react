import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g92amxlfl.css';
import '../../css/b/b_iq5obiy.css';
import '../../css/j/jdh9hhorp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcOaMObfg"><g class="aql7dnt-u"><path class="g92amxlfl"/><path class="b_iq5obiy"/><path class="jdh9hhorp"/></g></mask></defs><path mask="url(#SVGcOaMObfg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:watch",
	});
}

export default Component;
