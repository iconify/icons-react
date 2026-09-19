import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p8rbrlxyj.css';
import '../../css/u/ui3uycp9j.css';
import '../../css/t/tc8jmyben.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ7ETxbEG"><g class="aql7dnt-u"><path class="p8rbrlxyj"/><path class="ui3uycp9j"/><path class="tc8jmyben"/></g></mask></defs><path mask="url(#SVGZ7ETxbEG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:turn-around",
	});
}

export default Component;
