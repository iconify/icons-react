import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nggy8zk9i.css';
import '../../css/v/vdxl1de5w.css';
import '../../css/c/ce5x70xbs.css';
import '../../css/p/phpum01kj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnVDfQbHj"><g class="ufeehvblu"><path class="nggy8zk9i"/><path clip-rule="evenodd" class="vdxl1de5w"/><path class="ce5x70xbs"/><path class="phpum01kj"/></g></mask></defs><path mask="url(#SVGnVDfQbHj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:poker",
	});
}

export default Component;
