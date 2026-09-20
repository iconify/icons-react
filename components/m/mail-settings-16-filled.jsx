import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.be543j0kh {
  fill: currentColor;
  d: path("M13 10.4c-.75.384-1.6.6-2.5.6a5.5 5.5 0 0 1-1.852-.32l-1.41.76a.5.5 0 0 1-.475 0L1 8.337V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM5.022 5H3a2 2 0 0 0-2 2v.2l6 3.231l.544-.293a5.5 5.5 0 0 1-2.522-5.14m1.613-.08a2 2 0 0 0 1.43-2.478l-.156-.557q.383-.294.822-.497l.337.358a2 2 0 0 0 2.91.001l.325-.344q.447.212.834.518l-.126.423a2 2 0 0 0 1.456 2.519l.35.082a4.7 4.7 0 0 1 .01 1.017l-.461.118a2 2 0 0 0-1.43 2.478l.155.556q-.383.295-.822.498l-.337-.358a2 2 0 0 0-2.91-.002l-.324.344a4.3 4.3 0 0 1-.835-.517l.126-.423a2 2 0 0 0-1.456-2.52l-.35-.082a4.7 4.7 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="be543j0kh"/>`,
		"fallback": "fluent:mail-settings-16-filled",
	});
}

export default Component;
