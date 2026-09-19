import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/f/fvk6mt17r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBObfBe1F"><g class="aql7dnt-u"><path class="v9jvlqb3d"/><rect class="fvk6mt17r"/></g></mask></defs><path mask="url(#SVGBObfBe1F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:split",
	});
}

export default Component;
